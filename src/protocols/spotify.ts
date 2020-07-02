export default interface SpotifyDTO {
  description: string;
  href: string;
  id: string;
  name: string;
  tracks: {
    href: string;
    total: number;
  };
}
