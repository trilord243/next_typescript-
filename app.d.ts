type LazyProps = { image: string; alt: string };
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyProps & ImageNative;
