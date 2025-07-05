import cv2

def decode_stream(camera_url):
    print(f"[DECODER] Connecting to stream: {camera_url}")
    # Placeholder: simulate reading 10 frames
    frames = []
    for i in range(10):
        frames.append(f"frame_{i}")  # Replace with actual cv2 frame in real implementation
    print(f"[DECODER] Decoded {len(frames)} frames from {camera_url}")
    return frames
