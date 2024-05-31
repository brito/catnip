import json
import os

def read_json(filepath):
    with open(filepath, 'r') as file:
        return json.load(file)

def find_key_recursively(data, target_key):
    if isinstance(data, dict):
        for key, value in data.items():
            if key == target_key:
                return value
            elif isinstance(value, (dict, list)):
                result = find_key_recursively(value, target_key)
                if result is not None:
                    return result
    elif isinstance(data, list):
        for item in data:
            result = find_key_recursively(item, target_key)
            if result is not None:
                return result
    return None

def save_snippets_to_files(snippets, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    for snippet in snippets:
        name = snippet.get("name", "snippet")
        content = snippet.get("content", "")
        file_path = os.path.join(output_dir, f"{name}.js")
        with open(file_path, "w") as file:
            file.write(content)
        print(f"Saved {name}.js with content: {content[:30]}...")  # Print first 30 characters of content for verification

def main(filepath, output_dir):
    json_data = read_json(filepath)
    snippets = find_key_recursively(json_data, "script-snippets")
    if snippets is None:
        print("Key 'script-snippets' not found in the JSON file.")
        return
    if isinstance(snippets, str):
        snippets = json.loads(snippets)  # Parse the JSON string
    save_snippets_to_files(snippets, output_dir)
    print(f"Snippets saved to directory: {output_dir}")


# Example usage
# find the correct path by visiting chrome://version
filepath = "/Users/brito/Library/Application Support/Google/Chrome/Profile 1/Preferences"
# output directory will create and overwrite any existing files
output_dir = "snippets"
main(filepath, output_dir)
