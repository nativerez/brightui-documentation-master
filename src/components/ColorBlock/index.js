import React from 'react';
import CopyToClipboardButton from '@site/src/components/CopyToClipboardButton';
import cn from 'classnames';

const ColorBlock = ({
  title,
  subtitle,
  hexColor,
  rgbColor,
  hslColor,
  invert,
}) => {
  return (
    <div
      className={cn(
        'relative px-4 pt-6 pb-12 transition-all group hover:cursor-pointe hover:scale-[1.01] hover:shadow-xl hover:z-10',
        {
          'text-black': invert,
          'text-white': !invert,
        }
      )}
      style={{ backgroundColor: `${hexColor}` }}
    >
      <div className="font-bold">
        <span className="text-lg">{title}</span>
        <span className="block">{subtitle}</span>
      </div>
      <div>
        <span className="block">{hexColor}</span>
        <span className="block">{rgbColor}</span>
        <span className="block">{hslColor}</span>
      </div>
      <div
        className="absolute flex flex-col items-end pl-8 space-y-2 opacity-0 bottom-6 right-4 group-hover:opacity-100"
        style={{
          backgroundImage: `linear-gradient(to right, transparent, ${rgbColor} 50%)`,
        }}
      >
        <CopyToClipboardButton title="HEX" text={hexColor} invert={invert} />
        <CopyToClipboardButton title="RGB" text={rgbColor} invert={invert} />
        <CopyToClipboardButton title="HSLA" text={hslColor} invert={invert} />
      </div>
    </div>
  );
};

export default ColorBlock;
