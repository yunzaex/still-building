type PostcardArtworkProps = {
  slug: string;
  label: string;
};

export default function PostcardArtwork({ slug, label }: PostcardArtworkProps) {
  return (
    <div className={`postcard-art postcard-art-${slug}`} aria-hidden="true">
      <div className="postcard-art-frame">
        <span className="postcard-art-orbit" />
        <span className="postcard-art-sun" />
        <span className="postcard-art-horizon" />
        <span className="postcard-art-line postcard-art-line-one" />
        <span className="postcard-art-line postcard-art-line-two" />
      </div>
      <span className="postcard-art-label">{label}</span>
    </div>
  );
}
