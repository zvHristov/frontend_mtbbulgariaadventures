export async function getCountryFromIP(ip: string) {
    const response = await fetch(`https://ipinfo.io/${ip}?token=c6528750d63480`);
    const data = await response.json();
    return data.country; // return 'FR', 'DE', 'BG'
  }