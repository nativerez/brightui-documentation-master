import React from 'react';
import clsx from 'clsx';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

function NoteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none inline-block w-6 h-6 mr-2"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 8.729a1.346 1.346 0 0 1-.4-1c0-.4.129-.743.4-1 .271-.258.6-.4 1-.4s.743.128 1 .4c.257.271.4.6.4 1s-.129.742-.4 1c-.264.269-.623.423-1 .428-.4 0-.743-.157-1-.428Zm2.429 3.285a1.555 1.555 0 0 0-.443-.985c-.286-.272-.6-.429-.986-.443h-1.429c-.385.028-.685.185-.985.443a1.456 1.456 0 0 0-.443.985h1.428V16.3c.029.386.158.714.443.986.286.285.6.443.986.443h1.429c.385 0 .685-.158.985-.443.286-.272.429-.6.443-.986H13.43V12v.014ZM12 3.886c-4.486 0-8.143 3.628-8.143 8.114 0 4.486 3.657 8.143 8.143 8.143 4.486 0 8.143-3.643 8.143-8.143 0-4.5-3.657-8.129-8.143-8.129v.015ZM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.543 2 12 6.486 2 12 2Z"
        fill="#000"
      />
    </svg>
  );
}
function TipIcon() {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="flex-none inline-block w-6 h-6 mr-2"
    >
      <path
        d="M8.445 12.668a.899.899 0 0 0-1.551.6.9.9 0 0 0 .248.642l2.573 2.745a.9.9 0 0 0 1.335-.036l5.591-7.037a.9.9 0 0 0-1.367-1.17l-4.655 5.913a.4.4 0 0 1-.607.025l-1.567-1.682ZM2 12C2 6.5 6.5 2 12 2s10 4.5 10 10-4.5 10-10 10S2 17.5 2 12Z"
        fill="#28A138"
      />
    </svg>
  );
}
function DangerIcon() {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="flex-none inline-block w-6 h-6 mr-2"
    >
      <path
        d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2Zm4.655 5.333a.9.9 0 0 0-1.272.001l-3.1 3.106-.064.051a.4.4 0 0 1-.503-.051l-3.1-3.106a.9.9 0 0 0-1.272 0l-.08.091a.9.9 0 0 0 .08 1.181l3.102 3.108a.4.4 0 0 1 0 .566l-3.103 3.109a.9.9 0 1 0 1.274 1.271l3.099-3.106a.4.4 0 0 1 .566 0l3.1 3.106a.902.902 0 0 0 1.274.001l.08-.092a.9.9 0 0 0-.08-1.18l-3.103-3.11a.4.4 0 0 1 0-.565l3.104-3.108a.9.9 0 0 0-.002-1.273Z"
        fill="#D21C1C"
      />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none inline-block w-6 h-6 mr-2"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.857 8.4a1.347 1.347 0 0 1-.4-1c0-.4.129-.743.4-1 .272-.257.6-.4 1-.4s.743.129 1 .4.4.6.4 1-.128.743-.4 1c-.264.27-.623.423-1 .429-.4 0-.743-.158-1-.429Zm2.429 3.286a1.556 1.556 0 0 0-.443-.986c-.286-.271-.6-.429-.986-.443H10.43c-.386.029-.686.186-.986.443a1.457 1.457 0 0 0-.443.986h1.429v4.285c.028.386.157.715.442.986.286.286.6.443.986.443h1.429c.385 0 .685-.157.985-.443.286-.271.429-.6.443-.986h-1.428v-4.285Z"
        fill="#0057AD"
      />
    </svg>
  );
}
function CautionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-none inline-block w-6 h-6 mr-2"
    >
      <path
        d="M11 9.729a1.346 1.346 0 0 1-.4-1c0-.4.129-.743.4-1 .271-.258.6-.4 1-.4s.743.128 1 .4c.257.271.4.6.4 1s-.129.742-.4 1c-.264.269-.623.423-1 .428-.4 0-.743-.157-1-.428ZM13.429 13.014a1.555 1.555 0 0 0-.443-.985c-.286-.272-.6-.429-.986-.443h-1.429c-.385.028-.685.185-.985.443a1.456 1.456 0 0 0-.443.985h1.428V17.3c.029.386.158.714.443.986.286.285.6.443.986.443h1.429c.385 0 .685-.158.985-.443.286-.272.429-.6.443-.986H13.43v-4.286Z"
        fill="#C2670A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.981 17.845a4.174 4.174 0 0 0 4.175 4.175h11.69A4.143 4.143 0 0 0 22 17.845c0-.72-.188-1.44-.543-2.067l-5.855-11.71a4.19 4.19 0 0 0-3.611-2.088A4.19 4.19 0 0 0 8.38 4.068l-5.856 11.71a4.213 4.213 0 0 0-.543 2.067Zm2.004-1.253L9.84 4.882a2.513 2.513 0 0 1 4.321 0l5.855 11.71c.22.376.334.814.334 1.253a2.512 2.512 0 0 1-2.505 2.505H6.155a2.512 2.512 0 0 1-2.504-2.505c0-.439.114-.877.334-1.253Z"
        fill="#C2670A"
      />
    </svg>
  );
}
// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
const AdmonitionConfigs = {
  note: {
    infimaClassName: 'secondary',
    iconComponent: NoteIcon,
    label: (
      <Translate
        id="theme.admonition.note"
        description="The default label used for the Note admonition (:::note)"
      >
        note
      </Translate>
    ),
  },
  tip: {
    infimaClassName: 'success',
    iconComponent: TipIcon,
    label: (
      <Translate
        id="theme.admonition.tip"
        description="The default label used for the Tip admonition (:::tip)"
      >
        tip
      </Translate>
    ),
  },
  danger: {
    infimaClassName: 'danger',
    iconComponent: DangerIcon,
    label: (
      <Translate
        id="theme.admonition.danger"
        description="The default label used for the Danger admonition (:::danger)"
      >
        danger
      </Translate>
    ),
  },
  info: {
    infimaClassName: 'info',
    iconComponent: InfoIcon,
    label: (
      <Translate
        id="theme.admonition.info"
        description="The default label used for the Info admonition (:::info)"
      >
        info
      </Translate>
    ),
  },
  caution: {
    infimaClassName: 'warning',
    iconComponent: CautionIcon,
    label: (
      <Translate
        id="theme.admonition.caution"
        description="The default label used for the Caution admonition (:::caution)"
      >
        caution
      </Translate>
    ),
  },
};
// Legacy aliases, undocumented but kept for retro-compatibility
const aliases = {
  secondary: 'note',
  important: 'info',
  success: 'tip',
  warning: 'danger',
};
function getAdmonitionConfig(unsafeType) {
  const type = aliases[unsafeType] ?? unsafeType;
  const config = AdmonitionConfigs[type];
  if (config) {
    return config;
  }
  console.warn(
    `No admonition config found for admonition type "${type}". Using Info as fallback.`
  );
  return AdmonitionConfigs.info;
}
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
  const items = React.Children.toArray(children);
  const mdxAdmonitionTitle = items.find(
    (item) =>
      React.isValidElement(item) && item.props?.mdxType === 'mdxAdmonitionTitle'
  );
  const rest = <>{items.filter((item) => item !== mdxAdmonitionTitle)}</>;
  return {
    mdxAdmonitionTitle,
    rest,
  };
}
function processAdmonitionProps(props) {
  const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(
    props.children
  );
  return {
    ...props,
    title: props.title ?? mdxAdmonitionTitle,
    children: rest,
  };
}
export default function Admonition(props) {
  const {
    children,
    type,
    title,
    icon: iconProp,
  } = processAdmonitionProps(props);
  const typeConfig = getAdmonitionConfig(type);
  const titleLabel = title ?? typeConfig.label;
  const { iconComponent: IconComponent } = typeConfig;
  const icon = iconProp ?? <IconComponent />;
  console.log(children);
  return (
    <div
      className={clsx(
        ThemeClassNames.common.admonition,
        ThemeClassNames.common.admonitionType(props.type),
        'not-prose flex w-full p-4 rounded-md items-start justify-start space-x-4 bg-[#F0F6FA] border-0 border-l-4 border-solid mb-4 alert',
        `alert--${typeConfig.infimaClassName}`,
        styles.admonition
      )}
    >
      {icon}
      <div className={styles.admonitionContent}>
        <h4 className="mt-[2px] mb-4">{titleLabel}</h4>
        {children}
      </div>
    </div>
  );
}
