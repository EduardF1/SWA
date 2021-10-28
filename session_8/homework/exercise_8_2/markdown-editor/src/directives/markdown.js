const rules = [
    [/#{6}\s?([^\n]+)/g, '<h6>$1</h6>'],
    [/#{5}\s?([^\n]+)/g, '<h5>$1</h5>'],
    [/#{4}\s?([^\n]+)/g, '<h4>$1</h4>'],
    [/#{3}\s?([^\n]+)/g, '<h3>$1</h3>'],
    [/#{2}\s?([^\n]+)/g, '<h2>$1</h2>'],
    [/#{1}\s?([^\n]+)/g,    '<h1>$1</h1>'],
    [/\*\*([^*]+)\*\*/g,   '<b>$1</b>'],
    [/\*([^*]+)\*/g,     '<em>$1</em>'],
    [/\[([^\]]+)]\(([^)]+)\)/g, '<a href="$2">$1</a>'],
    [/((\n\d\..+)+)/g, '<ol>$1</ol>'],
    [/\n\d\.([^\n]+)/g, '<li>$1</li>'],
]
export default {
    beforeMount: (el) => {
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template) + '\n';
        });
        el.innerHTML = html;
    }
}