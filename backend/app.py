# app.py (Flask)
from flask import Flask, jsonify, request

app = Flask(__name__)

faqs = [
    {"id": 1, "question": "What is Apple?", "answer": "A fruit."},
    {"id": 2, "question": "What is Banana?", "answer": "A fruit."}
]

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((faq for faq in faqs if faq["id"] == id), None)
    return jsonify(faq)

@app.route('/faqs', methods=['POST'])
def add_faq():
    new_faq = request.json
    new_faq['id'] = len(faqs) + 1
    faqs.append(new_faq)
    return jsonify(new_faq)

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    updated_faq = request.json
    for faq in faqs:
        if faq['id'] == id:
            faq.update(updated_faq)
            return jsonify(faq)
    return "FAQ not found", 404

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [faq for faq in faqs if faq['id'] != id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
