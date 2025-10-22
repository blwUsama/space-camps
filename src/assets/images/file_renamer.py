import os
import re
from PIL import Image

# Folder containing your images
folder = "./"  # or replace with your image folder path

target_format = "jpg"
output_quality = 90  # JPEG quality
converted_dir = "converted"

# Supported image extensions (case-insensitive)
image_pattern = re.compile(r"^[^-]+(?:-[^-]+){4}\.(jpg|jpeg|png|gif|webp)$", re.IGNORECASE)

# Create output folder
output_path = os.path.join(folder, converted_dir)
os.makedirs(output_path, exist_ok=True)

# List and sort files alphabetically
files = sorted([f for f in os.listdir(folder) if image_pattern.match(f)])

for i, filename in enumerate(files, start=1):
    ext = os.path.splitext(filename)[1].lower()  # keep extension, lowercase it
    new_name = f"gallery-{i}{ext}"
    old_path = os.path.join(folder, filename)
    new_path = os.path.join(folder, new_name)

    try:
        with Image.open(old_path) as img:
            # Handle conversion modes
            if target_format.lower() in ["jpg", "jpeg"]:
                # Convert RGBA → RGB (white background for transparent PNGs)
                if img.mode in ("RGBA", "LA"):
                    bg = Image.new("RGB", img.size, (255, 255, 255))
                    bg.paste(img, mask=img.split()[-1])
                    img = bg
                else:
                    img = img.convert("RGB")

                img.save(new_path, "JPEG", quality=output_quality)

            elif target_format.lower() == "png":
                img.save(new_path, "PNG", optimize=True)

        print(f"✅ {filename} → {new_name}")
    except Exception as e:
        print(f"❌ Error converting {filename}: {e}")


print(f"\n✨ Done! Converted and renamed {len(files)} image(s).")
print(f"📁 Output saved in: {output_path}")
