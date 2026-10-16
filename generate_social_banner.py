import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def draw_star(draw, cx, cy, r_outer, r_inner, fill_color):
    """Draw a 5-pointed star."""
    points = []
    for i in range(10):
        r = r_outer if i % 2 == 0 else r_inner
        angle = i * math.pi / 5 - math.pi / 2
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=fill_color)

def draw_globe_icon(draw, cx, cy, r, color, line_w=4):
    """Draw a clean vector globe."""
    draw.ellipse([(cx - r, cy - r), (cx + r, cy + r)], outline=color, width=line_w)
    draw.line([(cx - r, cy), (cx + r, cy)], fill=color, width=line_w)
    draw.ellipse([(cx - int(r * 0.45), cy - r), (cx + int(r * 0.45), cy + r)], outline=color, width=line_w)

def draw_phone_handset_crisp(draw, cx, cy, size, color):
    """Draw a crisp, clear, recognizable telephone handset."""
    s = size
    # Thick curved receiver
    draw.arc([(cx - s, cy - s), (cx + s, cy + s)], start=110, end=250, fill=color, width=7)
    # Earpiece
    draw.rounded_rectangle([(cx - s + 1, cy - s + 2), (cx - s + 18, cy - s + 19)], radius=4, fill=color)
    # Mouthpiece
    draw.rounded_rectangle([(cx - s + 1, cy + s - 19), (cx - s + 18, cy + s - 2)], radius=4, fill=color)

def generate_banner():
    # 2x resolution: 2400 x 1260 -> 1200 x 630
    W, H = 2400, 1260
    
    # 1. Canvas Background: Soft modern light slate-blue
    img = Image.new("RGBA", (W, H), (244, 247, 251, 255))
    base = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(base)
    for y in range(H):
        ratio = y / H
        r = int(246 * (1 - ratio) + 238 * ratio)
        g = int(249 * (1 - ratio) + 242 * ratio)
        b = int(253 * (1 - ratio) + 248 * ratio)
        b_draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
    img.paste(base, (0, 0))

    # Outer padding for the floating white card
    pad_x, pad_y = 50, 42
    card_w = W - pad_x * 2 # 2300
    card_h = H - pad_y * 2 # 1176
    card_x, card_y = pad_x, pad_y
    card_radius = 56

    # Card Drop Shadow
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle(
        [(card_x - 4, card_y + 12), (card_x + card_w + 4, card_y + card_h + 24)],
        radius=card_radius + 4,
        fill=(15, 23, 42, 35)
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(24))
    img = Image.alpha_composite(img, shadow)

    draw = ImageDraw.Draw(img)

    # 2. Main White Card
    draw.rounded_rectangle(
        [(card_x, card_y), (card_x + card_w, card_y + card_h)],
        radius=card_radius,
        fill=(255, 255, 255, 255),
        outline=(219, 229, 242, 255),
        width=4
    )

    # Inner Padding within the card
    inner_pad_x = 95
    content_x = card_x + inner_pad_x
    content_w = card_w - inner_pad_x * 2 # 2110

    # Fonts
    font_bold_title = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 94)
    font_sub = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf", 46)
    font_pill = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 42)
    font_tag = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 36)
    font_bar = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 44)

    # ══════════════════════════════════════════════════
    # ROW 1: TOP HEADER (Logo + 100% ONLINE TAX SERVICES Pill)
    # ══════════════════════════════════════════════════
    logo_y = card_y + 80
    logo_raw = Image.open('src/assets/MTConsultancyLogo.webp')
    bbox = logo_raw.getbbox()
    logo_crop = logo_raw.crop(bbox) # ~2095x221
    
    target_logo_h = 116
    target_logo_w = int(logo_crop.width * (target_logo_h / logo_crop.height)) # ~1100
    logo_resized = logo_crop.resize((target_logo_w, target_logo_h), Image.Resampling.LANCZOS)
    img.paste(logo_resized, (content_x, logo_y), logo_resized)
    draw = ImageDraw.Draw(img)

    # Top Right Pill: "★ 100% ONLINE TAX SERVICES"
    tag_text = "100% ONLINE TAX SERVICES"
    tag_bbox = font_tag.getbbox(tag_text)
    tag_text_w = tag_bbox[2] - tag_bbox[0]
    tag_h = 78
    tag_w = tag_text_w + 120
    tag_x = card_x + card_w - inner_pad_x - tag_w
    tag_y = logo_y + (target_logo_h - tag_h) // 2

    draw.rounded_rectangle(
        [(tag_x, tag_y), (tag_x + tag_w, tag_y + tag_h)],
        radius=tag_h // 2,
        fill=(254, 242, 242, 255),
        outline=(254, 202, 202, 255),
        width=3
    )
    # Gold Star icon
    star_cx = tag_x + 42
    star_cy = tag_y + tag_h // 2
    draw_star(draw, star_cx, star_cy, r_outer=18, r_inner=8, fill_color=(245, 158, 11, 255))
    draw.text((tag_x + 76, tag_y + 17), tag_text, font=font_tag, fill=(227, 25, 55, 255))

    # ══════════════════════════════════════════════════
    # ROW 2: HEADLINE & SUBHEADLINE
    # ══════════════════════════════════════════════════
    headline_y = logo_y + target_logo_h + 85
    draw.text((content_x, headline_y), "Expert Tax, GST & Compliance", font=font_bold_title, fill=(10, 19, 43, 255))

    subhead_y = headline_y + 120
    draw.text((content_x, subhead_y), "Simplified for Businesses & Individuals Across India", font=font_sub, fill=(100, 116, 139, 255))

    # ══════════════════════════════════════════════════
    # ROW 3: 6 SERVICES PILLS (2 ROWS OF 3 PILLS)
    # ══════════════════════════════════════════════════
    services = [
        "GST Registration & Returns",
        "Income Tax (ITR) Filing",
        "Company Registration",
        "Tax Audit & Accounting",
        "Project Reports & CMA",
        "TDS & ROC Compliance"
    ]

    pills_start_y = subhead_y + 95
    pill_cols = 3
    pill_gap_x = 36
    pill_gap_y = 30
    pill_w = (content_w - (pill_cols - 1) * pill_gap_x) // pill_cols # ~680px
    pill_h = 108
    pill_radius = pill_h // 2

    for i, s_title in enumerate(services):
        c = i % pill_cols
        r = i // pill_cols
        px = content_x + c * (pill_w + pill_gap_x)
        py = pills_start_y + r * (pill_h + pill_gap_y)

        # Draw rounded pill button
        draw.rounded_rectangle(
            [(px, py), (px + pill_w, py + pill_h)],
            radius=pill_radius,
            fill=(255, 255, 255, 255),
            outline=(203, 213, 225, 255),
            width=3
        )

        # Center text inside pill
        t_box = font_pill.getbbox(s_title)
        t_w = t_box[2] - t_box[0]
        t_h = t_box[3] - t_box[1]
        tx = px + (pill_w - t_w) // 2
        ty = py + (pill_h - t_h) // 2 - 4
        draw.text((tx, ty), s_title, font=font_pill, fill=(15, 23, 42, 255))

    # ══════════════════════════════════════════════════
    # ROW 4: BOTTOM SOLID PILL BAR
    # ══════════════════════════════════════════════════
    bar_h = 138
    bar_y = card_y + card_h - 85 - bar_h
    bar_w = content_w
    bar_x = content_x
    bar_radius = bar_h // 2

    # Draw solid pill bar in Brand Red (#E31937)
    draw.rounded_rectangle(
        [(bar_x, bar_y), (bar_x + bar_w, bar_y + bar_h)],
        radius=bar_radius,
        fill=(227, 25, 55, 255)
    )

    # 3 sections distributed cleanly inside bottom bar
    col1_center_x = bar_x + int(bar_w * 0.17)
    col2_center_x = bar_x + int(bar_w * 0.50)
    col3_center_x = bar_x + int(bar_w * 0.83)

    item_y = bar_y + (bar_h // 2)

    # Section 1: Domain
    dom_text = "mtconsultancy.in"
    dom_bbox = font_bar.getbbox(dom_text)
    dom_text_w = dom_bbox[2] - dom_bbox[0]
    total_dom_w = 48 + 18 + dom_text_w
    dom_start_x = col1_center_x - total_dom_w // 2

    draw_globe_icon(draw, cx=dom_start_x + 24, cy=item_y, r=22, color=(255, 255, 255, 255), line_w=4)
    draw.text((dom_start_x + 60, item_y - 25), dom_text, font=font_bar, fill=(255, 255, 255, 255))

    # Section 2: Phone / Contact
    phone_text = "+91 77039 42779"
    ph_bbox = font_bar.getbbox(phone_text)
    ph_text_w = ph_bbox[2] - ph_bbox[0]
    total_ph_w = 46 + 18 + ph_text_w
    ph_start_x = col2_center_x - total_ph_w // 2

    draw_phone_handset_crisp(draw, cx=ph_start_x + 22, cy=item_y, size=20, color=(255, 255, 255, 255))
    draw.text((ph_start_x + 58, item_y - 25), phone_text, font=font_bar, fill=(255, 255, 255, 255))

    # Section 3: Trust Metric: "★ 4.2 Rating • 500+ Clients"
    stat_text = "4.2 Rating  •  500+ Clients"
    stat_bbox = font_bar.getbbox(stat_text)
    stat_text_w = stat_bbox[2] - stat_bbox[0]
    total_stat_w = 46 + 18 + stat_text_w
    stat_start_x = col3_center_x - total_stat_w // 2

    draw_star(draw, stat_start_x + 22, item_y, r_outer=22, r_inner=10, fill_color=(250, 204, 21, 255))
    draw.text((stat_start_x + 58, item_y - 25), stat_text, font=font_bar, fill=(255, 255, 255, 255))

    # Downscale from 2400x1260 to 1200x630 using Lanczos
    final_rgb = img.convert("RGB").resize((1200, 630), Image.Resampling.LANCZOS)
    final_rgba = img.resize((1200, 630), Image.Resampling.LANCZOS)

    out_jpg = "public/og-image.jpg"
    final_rgb.save(out_jpg, format="JPEG", quality=94, optimize=True)
    out_png = "public/og-image.png"
    final_rgba.save(out_png, format="PNG", optimize=True)
    out_tw = "public/twitter-card.jpg"
    final_rgb.save(out_tw, format="JPEG", quality=94, optimize=True)

    # Also update generate_social_banner.py with this definitive generator
    os.system("cp scratch_generate_taxbyca_style.py generate_social_banner.py")
    print(f"✅ Generated {out_jpg} ({os.path.getsize(out_jpg)} bytes)")
    print(f"✅ Generated {out_png} ({os.path.getsize(out_png)} bytes)")
    print(f"✅ Generated {out_tw} ({os.path.getsize(out_tw)} bytes)")

generate_banner()
