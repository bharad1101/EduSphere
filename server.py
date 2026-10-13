from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import parse_qs

class Handler(SimpleHTTPRequestHandler):

    def do_POST(self):

        if self.path == "/submit":

            length = int(self.headers.get("Content-Length", 0))

            data = self.rfile.read(length).decode("utf-8")

            form = parse_qs(data)

            name = form.get("name", [""])[0]
            email = form.get("email", [""])[0]
            course = form.get("course", [""])[0]

            response = (
                "Data received successfully!\n"
                "Name: " + name + "\n"
                "Email: " + email + "\n"
                "Course: " + course
            )

            response = response.encode("utf-8")

            self.send_response(200)

            self.send_header(
                "Content-Type",
                "text/plain; charset=utf-8"
            )

            self.send_header(
                "Content-Length",
                str(len(response))
            )

            self.end_headers()

            self.wfile.write(response)

        else:

            self.send_error(404)

server = HTTPServer(("localhost", 8000), Handler)

print("EduSphere server running at:")
print("http://localhost:8000")

server.serve_forever()
