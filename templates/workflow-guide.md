# Workflow Guide: Using Templates for Springboard Assignments

This short guide keeps every assignment and project documented the same way so the repo stays recruiter-friendly.

## For a New Unit / Exercise

1. Create the folder:
   ```bash
   mkdir exercises/39.2-react-jsx-props
   ```

2. Copy the assignment template:
   ```bash
   cp templates/assignment-README-template.md exercises/39.2-react-jsx-props/README.md
   ```

3. Open the new README.md and fill:
   - Overview
   - Tech Used
   - Setup & Running
   - Key Features
   - Challenges Overcome
   - Screenshots (add images)
   - What I Learned
   - Next Steps

4. Commit with a clear message:
   ```bash
   git add .
   git commit -m "docs: add README for 39.2 React JSX & Props"
   git push
   ```

## For a Polished Portfolio Project

1. Put the project in `projects/your-project-name/`.
2. Copy `templates/project-README-template.md` as the project's README.md.
3. Fill all sections, especially Live Demo, Screenshots, Architecture, and What I Learned.
4. Deploy to Vercel and paste the live link at the top.
5. Update the main README.md highlighted projects table with the real path and demo link.

## Tips for Recruiter Impact
- Always include screenshots.
- Write specific "What I Learned" and "Challenges Overcome" notes.
- Keep setup commands copy-paste ready.
- Use consistent commit messages.
- Promote only finished work into `/projects/`.

## Quick Recap
Copy a template into each new folder, fill the sections (especially screenshots and learnings), deploy the best pieces, and keep the main README updated.
