export const openLink = (link: string) => {
  const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};
