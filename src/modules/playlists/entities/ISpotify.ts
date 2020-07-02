interface ISpotifyDTO {
  description: string;
  href: string;
  id: string;
  name: string;
  tracks: {
    href: string;
    total: number;
  };
}

export default ISpotifyDTO;
