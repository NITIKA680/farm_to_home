import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import { logoPlaceholder } from '@/lib/placeholders';
import { useSettings } from '@/framework/settings';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  const {
    settings: { logo, siteTitle },
  }: any = useSettings();
  return (
    <Link href="/" className={cn('inline-flex', className)} style={{ paddingTop: '0px'}} {...props}>
      <span className="relative h-[2.125rem] w-32 md:w-[8.625rem]">
        <Image
          src={"/logo.jpeg"}
          alt={siteTitle || 'PickBazar Logo'}
          height={70}
          width={70}
          loading="eager"
          className="object-contain"
        />
      </span>
    </Link>
  );
};

export default Logo;
