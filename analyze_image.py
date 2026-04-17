import cv2
import numpy as np
import sys

img_path = r"d:\Projects\portfolio\public\port hero image of me.jpeg"
img = cv2.imread(img_path)
if img is None:
    print("Failed to load image")
    sys.exit(1)

h, w, c = img.shape
print(f"Shape: {w}x{h}")

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
_, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY)
# Look in top 30% for a blob
top_thresh = thresh[0:int(h*0.3), :]
coords = cv2.findNonZero(top_thresh)
if coords is not None:
    x, y, w_box, h_box = cv2.boundingRect(coords)
    print(f"White blob found at: x={x}, y={y}, w={w_box}, h={h_box}")
else:
    print("No white blob found")

