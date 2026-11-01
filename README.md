# Modern Research Portfolio — GitHub Pages Starter

A complete, editable academic website for a **doctoral researcher preparing postdoctoral applications**. This is an example template, not a biography or publication record. Every bracketed statement must be verified and personalized before public deployment.

**Includes:** Home, Research, Publications (interactive filters), Projects, Academic CV (print to PDF), Contact, modern responsive CSS, keyboard-accessible navigation, optional dark mode and deployment guidance. No build step, third-party fonts, analytics, web forms or external script dependencies.

## Files

```text
index.html                 Home / research introduction
research.html              Research statement, directions, methods
publications.html          Publication list with category filters
projects.html              Research software and study cards
cv.html                    Academic CV with Print / save PDF button
contact.html               Contact details and collaboration interests
assets/css/styles.css      Complete responsive styling + print styles
assets/js/main.js          Mobile menu, theme switch, filters, print button
assets/images/favicon.svg  Editable placeholder site icon
.nojekyll                  Publish HTML as-is without Jekyll processing
EDITING_GUIDE.md           What to replace and how to customize
LAUNCH_CHECKLIST.md        Accuracy, privacy, accessibility checks
```

## Deploy to https://YOUR-USERNAME.github.io/

1. Sign in to GitHub and create a **new public repository** named exactly `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with your real GitHub username; GitHub treats the account name case-insensitively, and the repository name should be lowercase).
2. Unzip this project on your computer. **Upload the files and folders inside this directory** to the **root** of your repository. Do not upload only the ZIP file or nest the project under an extra folder. `index.html` should appear at the top level.
3. Commit the changes to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment → Source**, choose **Deploy from a branch**. Choose branch `main` and folder **`/(root)`**, then click **Save**.
6. When the deployment finishes, visit `https://YOUR-USERNAME.github.io/`. GitHub may need several minutes to publish. Check **Actions** or **Settings → Pages** if it does not appear.
7. Update the CV / GitHub profile links to reference your live website only after verifying that the content is appropriate to publish.

**Official instructions:**
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Optional: publish through Git on your computer

Create the empty repository in GitHub first, then from the unzipped directory run:

```bash
git init
git add .
git commit -m "Initial academic research portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
git push -u origin main
```

If the GitHub repository already contains a README or other commits, clone it first, copy this project's files into the cloned folder and commit there instead of forcing an unrelated history.

## Preview locally

The pages can be opened in a browser by double-clicking `index.html` because all CSS, JS, and navigation links are relative. Alternatively, for more realistic testing:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with Ctrl+C.

## Edit content

1. **Name and affiliation:** Update header/footer content across all six HTML files (`[YOUR NAME]`, `[Your Full Name]`, `[University Name]`, etc.).
2. **Research:** Edit `index.html` and `research.html`. Replace scientific topics, methods and statements with your verified research description.
3. **Publications:** Edit `publications.html`. Replace example entries with real citations and persistent URLs. Remove categories that do not apply. If adding items, use `data-type="journal"`, `"conference"`, or `"preprint"` so filtering works.
4. **Projects:** Edit `projects.html`. Add true GitHub/repository links *only for public, approved artifacts*.
5. **CV:** Edit `cv.html`; click **Print / save PDF** or use your browser print dialog. You may also link an externally generated PDF from this page after you add it to the repository.
6. **Contact:** Edit `contact.html`. Only disclose contact details you agree to publish.
7. **Design:** Edit CSS variables at the beginning of `assets/css/styles.css`. Update the placeholder initials `YR` in each page header and `favicon.svg`.

See `EDITING_GUIDE.md` for examples and a complete content inventory.

## A note about GitHub profile README vs GitHub Pages

- Repository named `YOUR-USERNAME` with a `README.md` → content appears on your GitHub profile.
- Repository named `YOUR-USERNAME.github.io` with `index.html` → standalone website at `https://YOUR-USERNAME.github.io/`.

These are two separate repositories and can cross-link to each other.

## Privacy, scholarly integrity, and ownership

This starter contains only generic placeholder content, does not make live connections, and does not submit any user data. **A deployed GitHub Pages site is publicly accessible.** Before upload, remove private datasets, unpublished work not approved for release, unpublished reviewer or collaboration details, personal contact information you do not want public, private documents, and any placeholder claims that could be confused with actual achievements. GitHub itself may process visitor access logs. Use an approved institutional contact if you choose to provide an email address.

No license is included by default; choose a license for the source code and any publications/data separately after checking institution and collaborator rights.
