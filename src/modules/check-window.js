export const isMobile = () => {
  if (window.innerWidth < 768 || document.documentElement.clientWidth < 768 || document.body.clientWidth < 768) {
    return true;
    
  }

  return false;
}