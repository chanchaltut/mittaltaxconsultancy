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

def draw_whatsapp_badge(draw, cx, cy, r):
    """Draw an authentic vector WhatsApp icon (speech bubble + white phone handset)."""
    # 1. Green circular base
    draw.ellipse([(cx - r, cy - r), (cx + r, cy + r)], fill=(37, 211, 102, 255))
    # 2. Bubble tail pointing bottom-left
    tail_pts = [
        (cx - int(r * 0.72), cy + int(r * 0.40)),
        (cx - int(r * 1.05), cy + int(r * 1.05)),
        (cx - int(r * 0.35), cy + int(r * 0.82))
    ]
    draw.polygon(tail_pts, fill=(37, 211, 102, 255))
    
    # 3. Clean white telephone receiver inside bubble
    # Handset tilted at 45 degrees
    hs = int(r * 0.58)
    # Earpiece (top right)
    draw.ellipse([(cx + 2, cy - hs), (cx + 14, cy - hs + 12)], fill=(255, 255, 255, 255))
    # Mouthpiece (bottom left)
    draw.ellipse([(cx - hs, cy + 2), (cx - hs + 12, cy + 14)], fill=(255, 255, 255, 255))
    # Curved handle connecting them
    draw.arc([(cx - hs - 2, cy - hs - 2), (cx + hs + 4, cy + hs + 4)], start=105, end=255, fill=(255, 255, 255, 255), width=5)
    draw.arc([(cx - hs - 6, cy - hs - 6), (cx + hs, cy + hs)], start=110, end=250, fill=(255, 255, 255, 255), width=5)

def draw_email_icon(draw, cx, cy, w, h, color, line_w=3):
    x0, y0 = cx - w//2, cy - h//2
    x1, y1 = cx + w//2, cy + h//2
    draw.rounded_rectangle([(x0, y0), (x1, y1)], radius=4, outline=color, width=line_w)
    draw.line([(x0, y0), (cx, cy + 2)], fill=color, width=line_w)
    draw.line([(x1, y0), (cx, cy + 2)], fill=color, width=line_w)

def draw_location_icon(draw, cx, cy, r, color):
    draw.ellipse([(cx - r, cy - r - 4), (cx + r, cy + r - 4)], fill=color)
    draw.ellipse([(cx - r//2 + 1, cy - r//2 - 3), (cx + r//2 - 1, cy + r//2 - 5)], fill=(13, 23, 44, 255))
    points = [
        (cx - int(r * 0.8), cy - 2),
        (cx + int(r * 0.8), cy - 2),
        (cx, cy + r + 8)
    ]
    draw.polygon(points, fill=color)

def draw_check_badge(draw, cx, cy, r, bg_color, check_color):
    draw.ellipse([(cx - r, cy - r), (cx + r, cy + r)], fill=bg_color)
    p1 = (cx - int(r * 0.45), cy)
    p2 = (cx - int(r * 0.1), cy + int(r * 0.4))
    p3 = (cx + int(r * 0.5), cy - int(r * 0.35))
    draw.line([p1, p2], fill=check_color, width=max(3, int(r * 0.22)))
    draw.line([p2, p3], fill=check_color, width=max(3, int(r * 0.22)))

def draw_linkedin_badge(draw, cx, cy, size, font_xs):
    """Draw a clean official LinkedIn icon."""
    r = size // 2
    draw.rounded_rectangle([(cx - r, cy - r), (cx + r, cy + r)], radius=6, fill=(10, 102, 194, 255))
    draw.text((cx - 11, cy - 13), "in", font=font_xs, fill=(255, 255, 255, 255))

def generate_social_banners():
    W, H = 2400, 1260
    img = Image.new("RGBA", (W, H), (10, 19, 40, 255))
    
    # 1. Background Gradient (Deep Navy to Dark Midnight Slate)
    base = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw_base = ImageDraw.Draw(base)
    for y in range(H):
        ratio = y / H
        r = int(13 * (1 - ratio) + 6 * ratio)
        g = int(25 * (1 - ratio) + 11 * ratio)
        b = int(50 * (1 - ratio) + 22 * ratio)
        draw_base.line([(0, y), (W, y)], fill=(r, g, b, 255))
    img.paste(base, (0, 0))

    # Glows
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    
    # Top-right brand red glow
    for r in range(800, 0, -25):
        alpha = int(25 * (1 - r / 800))
        glow_draw.ellipse(
            [(1650 - r, 220 - r), (1650 + r, 220 + r)],
            fill=(227, 25, 55, alpha)
        )
    
    # Bottom-left royal blue glow
    for r in range(650, 0, -25):
        alpha = int(22 * (1 - r / 650))
        glow_draw.ellipse(
            [(350 - r, 1100 - r), (350 + r, 1100 + r)],
            fill=(30, 64, 175, alpha)
        )
    img = Image.alpha_composite(img, glow)

    # Modern dot grid
    grid = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid)
    for x in range(60, W - 60, 60):
        for y in range(60, H - 60, 60):
            grid_draw.ellipse([(x-2, y-2), (x+2, y+2)], fill=(255, 255, 255, 12))
    img = Image.alpha_composite(img, grid)

    # Fonts
    font_bold_xl = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 66)
    font_bold_lg = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 50)
    font_bold_md = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 38)
    font_bold_sm = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 32)
    font_bold_xs = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 26)
    font_bold_xxs = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf", 22)
    
    font_reg_lg = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf", 38)
    font_reg_md = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf", 32)
    font_reg_sm = ImageFont.truetype("/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf", 26)

    draw = ImageDraw.Draw(img)

    # ══════════════════════════════════════════════════
    # TOP HEADER: Logo Card + Trust Badges
    # ══════════════════════════════════════════════════
    logo_raw = Image.open('src/assets/MTConsultancyLogo.webp')
    bbox = logo_raw.getbbox()
    logo_crop = logo_raw.crop(bbox)
    
    target_h = 86
    target_w = int(logo_crop.width * (target_h / logo_crop.height))
    logo_resized = logo_crop.resize((target_w, target_h), Image.Resampling.LANCZOS)

    card_x, card_y = 100, 85
    card_pad_x, card_pad_y = 36, 18
    card_w = target_w + card_pad_x * 2
    card_h = target_h + card_pad_y * 2
    
    # Shadow for logo card
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.rounded_rectangle(
        [(card_x - 4, card_y + 8), (card_x + card_w + 4, card_y + card_h + 16)],
        radius=22,
        fill=(0, 0, 0, 90)
    )
    shadow = shadow.filter(ImageFilter.GaussianBlur(14))
    img = Image.alpha_composite(img, shadow)

    draw = ImageDraw.Draw(img)
    # White card container for logo
    draw.rounded_rectangle(
        [(card_x, card_y), (card_x + card_w, card_y + card_h)],
        radius=18,
        fill=(255, 255, 255, 255),
        outline=(227, 25, 55, 140),
        width=3
    )
    img.paste(logo_resized, (card_x + card_pad_x, card_y + card_pad_y), logo_resized)
    draw = ImageDraw.Draw(img)

    # Top right rating pill: Vector Gold Star + "4.2 Rating • 500+ Happy Clients Across India"
    pill_text = "4.2 Rating   •   500+ Happy Clients Across India"
    bbox_pill = font_bold_sm.getbbox(pill_text)
    pill_w = (bbox_pill[2] - bbox_pill[0]) + 115
    pill_h = 68
    pill_x = W - 100 - pill_w
    pill_y = card_y + (card_h - pill_h) // 2

    draw.rounded_rectangle(
        [(pill_x, pill_y), (pill_x + pill_w, pill_y + pill_h)],
        radius=34,
        fill=(20, 36, 70, 230),
        outline=(250, 204, 21, 160),
        width=2
    )
    # Draw vector gold star
    star_cx = pill_x + 38
    star_cy = pill_y + pill_h // 2
    draw_star(draw, star_cx, star_cy, r_outer=18, r_inner=8, fill_color=(250, 204, 21, 255))
    
    draw.text((pill_x + 68, pill_y + 17), "4.2", font=font_bold_sm, fill=(250, 204, 21, 255))
    offset_42 = font_bold_sm.getbbox("4.2 ")[2]
    draw.text((pill_x + 68 + offset_42 + 6, pill_y + 17), "Rating   •   500+ Happy Clients Across India", font=font_bold_sm, fill=(241, 245, 249, 255))

    # ══════════════════════════════════════════════════
    # LEFT COLUMN: Headlines + Service Cards
    # ══════════════════════════════════════════════════
    content_y = 270
    
    # Small Badge: "100% ONLINE TAXATION & FINANCIAL COMPLIANCE"
    sub_badge = "100% ONLINE TAXATION & FINANCIAL COMPLIANCE"
    draw.rounded_rectangle(
        [(100, content_y), (100 + 740, content_y + 46)],
        radius=12,
        fill=(227, 25, 55, 40),
        outline=(227, 25, 55, 180),
        width=2
    )
    draw.text((120, content_y + 9), sub_badge, font=font_bold_xs, fill=(255, 110, 125, 255))

    # Main Headline
    headline_y = content_y + 70
    draw.text((100, headline_y), "Your Trusted Financial Partner", font=font_bold_xl, fill=(255, 255, 255, 255))
    
    subhead_y = headline_y + 85
    draw.text((100, subhead_y), "Expert compliance & accounting with accuracy, speed & fixed pricing.", font=font_reg_lg, fill=(186, 202, 226, 255))

    # 6 Service Cards (2 columns of 3)
    services = [
        ("GST Registration & Returns", "Monthly, Quarterly, E-Way & ITC"),
        ("Income Tax Return (ITR)", "Salaried, Business & Capital Gains"),
        ("Company & MSME Setup", "Pvt Ltd, LLP, MSME & Startup India"),
        ("TDS Returns & Filings", "Form 24Q, 26Q & Strict Compliance"),
        ("Accounting & Bookkeeping", "Professional monthly plans from ₹1,999"),
        ("Tax Audits & CA Reports", "NGO 12A/80G, CMA Data & Certifications")
    ]

    grid_y = subhead_y + 85
    col_w = 670
    row_h = 94
    gap_x = 30
    gap_y = 16

    for i, (title, desc) in enumerate(services):
        c = i % 2
        r = i // 2
        sx = 100 + c * (col_w + gap_x)
        sy = grid_y + r * (row_h + gap_y)

        # Container
        draw.rounded_rectangle(
            [(sx, sy), (sx + col_w, sy + row_h)],
            radius=16,
            fill=(18, 33, 64, 210),
            outline=(45, 75, 135, 140),
            width=2
        )
        # Vector Checkmark Badge
        draw_check_badge(draw, cx=sx + 36, cy=sy + 47, r=18, bg_color=(227, 25, 55, 255), check_color=(255, 255, 255, 255))

        # Title & Subtitle
        draw.text((sx + 68, sy + 15), title, font=font_bold_sm, fill=(255, 255, 255, 255))
        draw.text((sx + 68, sy + 54), desc, font=font_reg_sm, fill=(148, 163, 184, 255))

    # ══════════════════════════════════════════════════
    # RIGHT COLUMN: Founder Profile Card (Lovely Mittal)
    # ══════════════════════════════════════════════════
    card_rx = 1620
    card_ry = 270
    card_rw = 680
    card_rh = 690

    # Glow shadow
    f_shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    fs_draw = ImageDraw.Draw(f_shadow)
    fs_draw.rounded_rectangle(
        [(card_rx - 10, card_ry + 10), (card_rx + card_rw + 10, card_ry + card_rh + 20)],
        radius=36,
        fill=(0, 0, 0, 120)
    )
    f_shadow = f_shadow.filter(ImageFilter.GaussianBlur(25))
    img = Image.alpha_composite(img, f_shadow)

    draw = ImageDraw.Draw(img)
    # Founder Card Container
    draw.rounded_rectangle(
        [(card_rx, card_ry), (card_rx + card_rw, card_ry + card_rh)],
        radius=30,
        fill=(16, 29, 56, 240),
        outline=(227, 25, 55, 140),
        width=3
    )

    # Portrait of Lovely Mittal
    fp_orig = Image.open('src/assets/female-professional.jpg').convert("RGBA")
    fp_crop_rect = fp_orig.crop((260, 95, 870, 620)) # w=610, h=525
    
    p_disp_w = 610
    p_disp_h = 360
    
    portrait_resized = fp_crop_rect.resize((p_disp_w, int(p_disp_w * (fp_crop_rect.height / fp_crop_rect.width))), Image.Resampling.LANCZOS)
    portrait_final = portrait_resized.crop((0, 0, p_disp_w, p_disp_h))
    
    # Rounded mask for portrait
    p_mask = Image.new("L", (p_disp_w, p_disp_h), 0)
    p_mask_draw = ImageDraw.Draw(p_mask)
    p_mask_draw.rounded_rectangle([(0, 0), (p_disp_w, p_disp_h)], radius=20, fill=255)
    
    px = card_rx + (card_rw - p_disp_w) // 2
    py = card_ry + 32
    
    # Border behind portrait
    draw.rounded_rectangle(
        [(px - 3, py - 3), (px + p_disp_w + 3, py + p_disp_h + 3)],
        radius=22,
        outline=(227, 25, 55, 160),
        width=3
    )
    img.paste(portrait_final, (px, py), p_mask)
    draw = ImageDraw.Draw(img)

    # Founder Info below photo
    name_text = "Lovely Mittal"
    n_box = font_bold_lg.getbbox(name_text)
    n_w = n_box[2] - n_box[0]
    total_name_w = n_w + 45
    name_start_x = card_rx + (card_rw - total_name_w) // 2
    name_y = py + p_disp_h + 24
    
    draw.text((name_start_x, name_y), name_text, font=font_bold_lg, fill=(255, 255, 255, 255))
    # LinkedIn badge
    li_cx = name_start_x + n_w + 24
    li_cy = name_y + 26
    draw_linkedin_badge(draw, cx=li_cx, cy=li_cy, size=34, font_xs=font_bold_xxs)

    role_text = "Founder & Principal Consultant"
    r_box = font_bold_sm.getbbox(role_text)
    r_w = r_box[2] - r_box[0]
    draw.text((card_rx + (card_rw - r_w) // 2, name_y + 64), role_text, font=font_bold_sm, fill=(227, 25, 55, 255))

    # Trust Pill: "✓ Verified Tax Expert • Open 24/7 Across India"
    badge_exp = "✓ Verified Tax Expert   •   Open 24/7 Across India"
    b_box = font_bold_xs.getbbox(badge_exp)
    b_w = b_box[2] - b_box[0]
    pill_bw = b_w + 50
    pill_bh = 46
    pill_bx = card_rx + (card_rw - pill_bw) // 2
    pill_by = name_y + 115
    draw.rounded_rectangle(
        [(pill_bx, pill_by), (pill_bx + pill_bw, pill_by + pill_bh)],
        radius=23,
        fill=(22, 38, 72, 220),
        outline=(59, 130, 246, 120),
        width=2
    )
    draw.text((pill_bx + 25, pill_by + 9), badge_exp, font=font_bold_xs, fill=(203, 213, 225, 255))

    # ══════════════════════════════════════════════════
    # BOTTOM CONTACT & DOMAIN BAR
    # ══════════════════════════════════════════════════
    bar_y = 1025
    bar_h = 160
    draw.rounded_rectangle(
        [(100, bar_y), (W - 100, bar_y + bar_h)],
        radius=24,
        fill=(13, 23, 44, 255),
        outline=(227, 25, 55, 200),
        width=3
    )

    # 1. Left Domain Button
    dom_x = 140
    dom_w = 490
    dom_h = 92
    dom_y = bar_y + 34
    draw.rounded_rectangle(
        [(dom_x, dom_y), (dom_x + dom_w, dom_y + dom_h)],
        radius=18,
        fill=(227, 25, 55, 255)
    )
    # Globe vector icon
    draw_globe_icon(draw, cx=dom_x + 55, cy=dom_y + dom_h//2, r=22, color=(255, 255, 255, 255), line_w=3)
    draw.text((dom_x + 95, dom_y + 24), "mtconsultancy.in", font=font_bold_md, fill=(255, 255, 255, 255))

    # 2. Phone / WhatsApp
    p_x = dom_x + dom_w + 55
    # Authentic WhatsApp Icon (green bubble + handset)
    draw_whatsapp_badge(draw, cx=p_x + 22, cy=bar_y + 70, r=22)
    draw.text((p_x + 58, bar_y + 40), "Call / WhatsApp:", font=font_reg_sm, fill=(148, 163, 184, 255))
    draw.text((p_x + 58, bar_y + 76), "+91 77039 42779", font=font_bold_md, fill=(255, 255, 255, 255))

    # 3. Email Support
    e_x = p_x + 470
    draw_email_icon(draw, cx=e_x + 14, cy=bar_y + 54, w=28, h=20, color=(227, 25, 55, 255), line_w=3)
    draw.text((e_x + 38, bar_y + 40), "Email Support:", font=font_reg_sm, fill=(148, 163, 184, 255))
    draw.text((e_x + 38, bar_y + 78), "mtconsultancyinfo@gmail.com", font=font_bold_sm, fill=(255, 255, 255, 255))

    # 4. Location
    l_x = e_x + 560
    draw_location_icon(draw, cx=l_x + 12, cy=bar_y + 54, r=12, color=(227, 25, 55, 255))
    draw.text((l_x + 36, bar_y + 40), "Location:", font=font_reg_sm, fill=(148, 163, 184, 255))
    draw.text((l_x + 36, bar_y + 78), "East Delhi, India", font=font_bold_sm, fill=(255, 255, 255, 255))

    # Downscale from 2400x1260 to 1200x630 using Lanczos
    final_img_rgb = img.convert("RGB").resize((1200, 630), Image.Resampling.LANCZOS)
    final_img_rgba = img.resize((1200, 630), Image.Resampling.LANCZOS)

    # Save to public directory
    os.makedirs('public', exist_ok=True)
    
    # 1. Primary Open Graph JPG (1200x630)
    out_og_jpg = 'public/og-image.jpg'
    final_img_rgb.save(out_og_jpg, format='JPEG', quality=92, optimize=True)
    print(f"✅ Generated {out_og_jpg} ({os.path.getsize(out_og_jpg)} bytes)")

    # 2. Open Graph PNG (1200x630)
    out_og_png = 'public/og-image.png'
    final_img_rgba.save(out_og_png, format='PNG', optimize=True)
    print(f"✅ Generated {out_og_png} ({os.path.getsize(out_og_png)} bytes)")

    # 3. Twitter Card JPG (1200x630)
    out_tw_jpg = 'public/twitter-card.jpg'
    final_img_rgb.save(out_tw_jpg, format='JPEG', quality=92, optimize=True)
    print(f"✅ Generated {out_tw_jpg} ({os.path.getsize(out_tw_jpg)} bytes)")

if __name__ == '__main__':
    generate_social_banners()
