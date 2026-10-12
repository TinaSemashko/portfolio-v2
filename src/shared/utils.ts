export const openLink = (link: string) => {
  const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export const visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap',
  border: 0,
  margin: '-1px',
  padding: 0,
} as const;
