# Editing Guide — Research Portfolio

The site uses **plain HTML + CSS + a little JavaScript**. No React, frameworks, deployment workflows, templates or package managers are required. You can use GitHub's built-in file editor after deployment.

## Recommended order of customization

| Location | Replace | Suggested final content |
| --- | --- | --- |
| All HTML page headers and footers | `[YOUR NAME]`, `YR`, `[Your Full Name]`, affiliation | One consistent scholarly identity |
| `index.html` hero | `[Research Problem]`, `[Method 1]`, `[Method 2]` | Concrete 2–3 sentence doctoral research overview |
| `research.html` | research statement, questions, workflow, future directions | Your real research agenda, novelty and planned trajectory |
| `publications.html` | 3 sample entries | Author lists, full paper titles, accurate venue, publication year and DOI |
| `projects.html` | 3 sample projects | Public work with objectives, role, methods, deliverables and links |
| `cv.html` | academic sections | Verified education, research appointments, outputs, teaching and skills |
| `contact.html` | contact and collaboration placeholders | Approved institutional email and public scholarly profiles |
| `assets/css/styles.css` | root design tokens | Brand colors, background, typography or spacing |
| `assets/images/favicon.svg` | initials | Your personal/research monogram or icon |

## How to add real links

Replace placeholder text with standard anchor elements. Example:

```html
<a href="https://orcid.org/YOUR-ORCID-ID" rel="me">ORCID</a>
```

A scholarly paper link can use a persistent DOI URL, and a public research repository can link to its GitHub URL. Do not imply that an unpublished manuscript is peer-reviewed. Avoid referencing unapproved research materials.

## Updating the publication filters

Each publication item uses `data-type`. Example:

```html
<article class="publication" data-type="journal">
  <div class="pub-number">04</div>
  <div>
    <span class="pub-type">JOURNAL ARTICLE</span>
    <h2>Verified article title</h2>
    <p class="pub-authors">Verified authors, in correct order</p>
    <p class="pub-venue">Journal · Year</p>
    <div class="pub-links">
      <a href="https://doi.org/EXACT-DOI">DOI</a>
    </div>
  </div>
</article>
```

To style real links in publication tags, add `.pub-links a` alongside `.pub-links span` in `styles.css` or reuse the existing chip styles.

If your field does not publish conference papers, delete that category's button or replace it with another type and modify the corresponding `data-type` values. You can alter the count message in `assets/js/main.js` from `sample entries` to `publications` once your verified entries are in place.

## CV workflow

The `cv.html` page is intentionally self-contained. After you edit it, click **Print / save PDF**, select the browser's **Save as PDF** destination, inspect the layout, and save the resulting file locally. If you already use Overleaf, export your CV PDF from Overleaf and optionally add it to `assets/` with a link to it (after reviewing all personal details and permissions).

## Adding a professional photo

This starter deliberately does not include a fabricated portrait or external image URL. If you want a photo, upload an authorized image to `assets/images/`, add `<img alt="Portrait of [Your Name]" src="assets/images/portrait.jpg">` to the homepage, and style it in CSS. Portraits are optional for academic portfolios.

## A useful 50-word research introduction formula

> I am a doctoral researcher in [discipline] at [institution]. I investigate [concrete scientific question], using [methods] to address [specific knowledge gap]. My current work focuses on [two research themes] and contributes [verified scientific output or aim]. I am interested in postdoctoral collaborations related to [research direction].

Do not claim a faculty/postdoc appointment, awarded doctorate, grant or publication unless you actually hold it. Remove any opportunity statement that no longer matches your search status.

## Common mistakes

- Uploading the ZIP file itself instead of extracting its contents into the repository root.
- Naming your website repository `YOUR-USERNAME` rather than `YOUR-USERNAME.github.io`.
- Keeping placeholder manuscript entries that look like real papers.
- Including scripts for tracking, third-party widgets or remote fonts without reviewing privacy implications.
- Keeping broken URLs or posting sensitive information in Git history.
- Using a GitHub project-site path instead of the user-site path. This template uses relative links, which can work in either arrangement.
