import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const Verify = (text) => {
 return DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(text)
}

export default function RowDescription({data}) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: Verify(data) }} />
    </>
  );
}
