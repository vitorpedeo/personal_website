export function downloadResume(language: 'ptBR' | 'enUS') {
  const fileName = `resume-${language}.pdf`;
  const fileDir = `/resumes/${fileName}`;

  const anchorTag = document.createElement('a');
  anchorTag.setAttribute('href', fileDir);
  anchorTag.setAttribute('download', fileName);

  document.body.appendChild(anchorTag);

  anchorTag.click();
  anchorTag.remove();
}
