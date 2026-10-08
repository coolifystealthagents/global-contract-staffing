from html.parser import HTMLParser
import pathlib
import sys

BANNED = ("\u2014", "\u2013", "--")
CHECKED_ATTRS = {"alt", "title", "content", "aria-label", "placeholder", "value"}

class VisibleCopyParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.hidden_depth = 0
        self.fragments = []

    def handle_starttag(self, tag, attrs):
        if tag in {"script", "style", "noscript"}:
            self.hidden_depth += 1
        for name, value in attrs:
            if name in CHECKED_ATTRS and value:
                self.fragments.append(value)

    def handle_endtag(self, tag):
        if tag in {"script", "style", "noscript"} and self.hidden_depth:
            self.hidden_depth -= 1

    def handle_data(self, data):
        if not self.hidden_depth:
            self.fragments.append(data)

root = pathlib.Path(sys.argv[1])
fail = False
for html_file in root.rglob("*.html"):
    parser = VisibleCopyParser()
    parser.feed(html_file.read_text(encoding="utf-8", errors="ignore"))
    visible_copy = " ".join(parser.fragments)
    hits = [token for token in BANNED if token in visible_copy]
    if hits:
        print(f"Banned reader-facing dash in {html_file}: {hits}")
        fail = True

sys.exit(1 if fail else 0)
