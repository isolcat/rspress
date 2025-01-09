import { useLang, usePageData } from '@rspress/core/runtime';
import { getCustomMDXComponent } from '@rspress/core/theme';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './API.scss';

export default (props: { moduleName: string }) => {
  const lang = useLang();
  const { page } = usePageData();
  const { moduleName } = props;
  // some api doc have two languages.
  const apiDocMap = page.apiDocMap as Record<string, string>;
  // avoid error when no page data
  const apiDoc =
    apiDocMap?.[moduleName] || apiDocMap?.[`${moduleName}-${lang}`];
  return (
    <ReactMarkdown
      remarkPlugins={[[remarkGfm]]}
      components={getCustomMDXComponent() as Record<string, React.ElementType>}
      skipHtml={true}
      className="rspress-plugin-api-docgen"
    >
      {apiDoc}
    </ReactMarkdown>
  );
};
