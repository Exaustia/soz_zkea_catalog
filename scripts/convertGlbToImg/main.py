import os
import trimesh
from PIL import Image
from io import BytesIO

def render_glb_to_image(glb_path, image_path, width=800, height=600):
    # Load the GLB file
    try:
        mesh = trimesh.load(glb_path)
    except Exception as e:
        print(f"Failed to load GLB file {glb_path}: {e}")
        return

    # Create a scene
    scene = trimesh.Scene(mesh)

    # Ensure width and height are not zero
    if width == 0 or height == 0:
        print("Width and height must be non-zero values")
        return

    # Render the scene to an image
    try:
        png = scene.save_image(resolution=(width, height), visible=True)
    except Exception as e:
        print(f"Failed to render image from GLB file {glb_path}: {e}")
        return

    # Convert the image data to a PIL Image
    try:
        image = Image.open(BytesIO(png))
    except Exception as e:
        print(f"Failed to convert image data to PIL Image for {glb_path}: {e}")
        return

    # Save the image
    try:
        image.save(image_path)
    except Exception as e:
        print(f"Failed to save image {image_path}: {e}")

# Define file paths
# Read folder model 
models = os.listdir('./models')
currentModel = os.listdir('./images')

for model in models:
    name = model.split('.')[0]
    image_path = f'./images/{name}.png'
    if name + '.png' in currentModel:
        print(f'{name} already exists')
        continue
    
    glb_path = f'./models/{model}'
    render_glb_to_image(glb_path, image_path)