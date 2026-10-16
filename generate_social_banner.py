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

def draw_globe_icon(draw, cx, cy, r, color, line_w=5):
    """Draw a bold vector globe."""
    draw.ellipse([(cx - r, cy - r), (cx + r, cy + r)], outline=color, width=line_w)
    draw.line([(cx - r, cy), (cx + r, cy)], fill=color, width=line_w)
    draw.ellipse([(cx - int(r * 0.45), cy - r), (cx + int(r * 0.45), cy + r)], outline=color, width=line_w)

def draw_phone_handset_crisp(draw, cx, cy, size, color):
    """Draw a bold, prominent, crisp telephone handset."""
    s = size
    # Thick curved receiver
    draw.arc([(cx - s, cy - s), (cx + s, cy + s)], start=110, end=250, fill=color, width=9)
    # Earpiece
    draw.rounded_rectangle([(cx - s + 1, cy - s + 1), (cx - s + 22, cy - s + 22)], radius=5, fill=color)
    # Mouthpiece
    draw.rounded_rectangle([(cx - s + 1, cy + s - 22), (cx - s + 22, cy + s - 1)], radius=5, fill=color)

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
    pad_x, pad_y = 50, 40
    card_w = W - pad_x * 2 # 2300
    card_h = H - pad_y * 2 # 1180
    card_x, card_y = pad_x, pad_y
    card_radius = 56

    # Card Drop Shadow
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle(
        [(card_x - 4, card_y + 12), (card_x + card_w + 4, card_y + card_h + 24)],
        radius=card_radius + 4,
        fill=(15, 23, 42, 38)
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
    inner_pad_x = 90
    content_x = card_x + inner_pad_x
    content_w = card_w - inner_pad_x * 2 # 2120

    # Fonts
    font_bold_title = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 96)
    font_sub = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf", 46)
    font_pill = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 44)
    font_tag = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 38)
    font_bar = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 56)

    # ══════════════════════════════════════════════════
    # ROW 1: TOP HEADER (Logo + 100% ONLINE TAX SERVICES Pill)
    # ══════════════════════════════════════════════════
    logo_y = card_y + 75
    logo_raw = Image.open('src/assets/MTConsultancyLogo.webp')
    bbox = logo_raw.getbbox()
    logo_crop = logo_raw.crop(bbox) # ~2095x221
    
    target_logo_h = 118
    target_logo_w = int(logo_crop.width * (target_logo_h / logo_crop.height)) # ~1120
    logo_resized = logo_crop.resize((target_logo_w, target_logo_h), Image.Resampling.LANCZOS)
    img.paste(logo_resized, (content_x, logo_y), logo_resized)
    draw = ImageDraw.Draw(img)

    # Top Right Pill: "★ 100% ONLINE TAX SERVICES"
    tag_text = "100% ONLINE TAX SERVICES"
    tag_bbox = font_tag.getbbox(tag_text)
    tag_text_w = tag_bbox[2] - tag_bbox[0]
    tag_h = 82
    tag_w = tag_text_w + 124
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
    star_cx = tag_x + 44
    star_cy = tag_y + tag_h // 2
    draw_star(draw, star_cx, star_cy, r_outer=20, r_inner=9, fill_color=(245, 158, 11, 255))
    draw.text((tag_x + 80, tag_y + 19), tag_text, font=font_tag, fill=(192, 21, 48, 255))

    # ══════════════════════════════════════════════════
    # ROW 2: HEADLINE & SUBHEADLINE
    # ══════════════════════════════════════════════════
    headline_y = logo_y + target_logo_h + 80
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

    pills_start_y = subhead_y + 90
    pill_cols = 3
    pill_gap_x = 36
    pill_gap_y = 28
    pill_w = (content_w - (pill_cols - 1) * pill_gap_x) // pill_cols # ~682px
    pill_h = 106
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
    # ROW 4: BOTTOM SOLID PILL BAR — BOLDER & BALANCED
    # ══════════════════════════════════════════════════
    bar_h = 160 # taller bar for larger text and icons
    bar_y = card_y + card_h - 75 - bar_h
    bar_w = content_w
    bar_x = content_x
    bar_radius = bar_h // 2

    # Draw solid pill bar in refined Brand Red (#C01530)
    draw.rounded_rectangle(
        [(bar_x, bar_y), (bar_x + bar_w, bar_y + bar_h)],
        radius=bar_radius,
        fill=(192, 21, 48, 255)
    )

    item_y = bar_y + (bar_h // 2)

    font_bar = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", 52)

    # Section 1: Domain: "🌐 mtconsultancy.in"
    dom_text = "mtconsultancy.in"
    dom_bbox = font_bar.getbbox(dom_text)
    dom_text_w = dom_bbox[2] - dom_bbox[0]
    dom_icon_r = 28
    dom_gap = 20
    dom_total_w = (dom_icon_r * 2) + dom_gap + dom_text_w

    # Section 2: Phone / Contact: "📞 +91 77039 42779"
    phone_text = "+91 77039 42779"
    ph_bbox = font_bar.getbbox(phone_text)
    ph_text_w = ph_bbox[2] - ph_bbox[0]
    ph_size = 26
    ph_gap = 20
    ph_total_w = (ph_size * 2) + ph_gap + ph_text_w

    # Section 3: Trust Metric: "★ 4.2 Rating • 500+ Clients"
    stat_text = "4.2 Rating • 500+ Clients"
    stat_bbox = font_bar.getbbox(stat_text)
    stat_text_w = stat_bbox[2] - stat_bbox[0]
    star_r = 28
    star_gap = 20
    stat_total_w = (star_r * 2) + star_gap + stat_text_w

    # Balanced spacing across the pill
    edge_pad = 70
    available_gap = bar_w - (edge_pad * 2) - (dom_total_w + ph_total_w + stat_total_w)
    gap = available_gap / 2

    item1_x = int(bar_x + edge_pad)
    item2_x = int(item1_x + dom_total_w + gap)
    item3_x = int(item2_x + ph_total_w + gap)

    # 1. Domain
    draw_globe_icon(draw, cx=item1_x + dom_icon_r, cy=item_y, r=dom_icon_r, color=(255, 255, 255, 255), line_w=5)
    draw.text((item1_x + (dom_icon_r * 2) + dom_gap, item_y), dom_text, font=font_bar, anchor="lm", fill=(255, 255, 255, 255))

    # 2. Phone
    draw_phone_handset_crisp(draw, cx=item2_x + ph_size, cy=item_y, size=ph_size, color=(255, 255, 255, 255))
    draw.text((item2_x + (ph_size * 2) + ph_gap, item_y), phone_text, font=font_bar, anchor="lm", fill=(255, 255, 255, 255))

    # 3. Trust Metric
    draw_star(draw, item3_x + star_r, item_y, r_outer=star_r, r_inner=13, fill_color=(250, 204, 21, 255))
    draw.text((item3_x + (star_r * 2) + star_gap, item_y), stat_text, font=font_bar, anchor="lm", fill=(255, 255, 255, 255))

    # Downscale from 2400x1260 to 1200x630 using Lanczos
    final_rgb = img.convert("RGB").resize((1200, 630), Image.Resampling.LANCZOS)
    final_rgba = img.resize((1200, 630), Image.Resampling.LANCZOS)

    out_jpg = "public/og-image.jpg"
    final_rgb.save(out_jpg, format="JPEG", quality=95, optimize=True)
    out_png = "public/og-image.png"
    final_rgba.save(out_png, format="PNG", optimize=True)
    out_tw = "public/twitter-card.jpg"
    final_rgb.save(out_tw, format="JPEG", quality=95, optimize=True)

    print(f"✅ Generated {out_jpg} ({os.path.getsize(out_jpg)} bytes)")
    print(f"✅ Generated {out_png} ({os.path.getsize(out_png)} bytes)")

generate_banner()
