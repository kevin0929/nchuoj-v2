'use client';

import { useEffect } from 'react';
import { RichTextEditor } from '@mantine/tiptap';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapLink from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';

import { Markdown } from 'tiptap-markdown';
import Mathematics from '@tiptap/extension-mathematics';

type Props = {
  value: string;
  onChange: (markdown: string) => void;
  height?: number;
  placeholder?: string;
};

export default function Editor({
  value,
  onChange,
  height = 360,
  placeholder = '用 Markdown 與 LaTeX（$...$ / $$...$$）撰寫題目說明…',
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: { HTMLAttributes: { class: 'prose-code-block' } },
      }),
      TiptapLink.configure({
        openOnClick: true,
        autolink: true,
        linkOnPaste: true,
      }),
      Placeholder.configure({ placeholder }),
      Markdown.configure({
        transformPastedText: true,
        transformCopiedText: true,
      }),
      Mathematics.configure(),
    ],
    content: '',
    immediatelyRender: false,

    onCreate: ({ editor }) => {
      if (value) editor.commands.setContent(value);
    },

    onUpdate: ({ editor }) => {
      const md = editor.storage?.markdown?.getMarkdown?.() ?? '';
      onChange(md);
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.storage?.markdown?.getMarkdown?.() ?? '';
    if (value !== current) {
      editor.commands.setContent(value || '');
    }
  }, [value, editor]);

  return (
    <div className="w-full">
      <RichTextEditor editor={editor} className="rounded-2xl shadow-sm">
        <RichTextEditor.Toolbar sticky stickyOffset={0}>
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Bold />
            <RichTextEditor.Italic />
            <RichTextEditor.Code />
            <RichTextEditor.Strikethrough />
            <RichTextEditor.ClearFormatting />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.H1 />
            <RichTextEditor.H2 />
            <RichTextEditor.H3 />
            <RichTextEditor.Blockquote />
            <RichTextEditor.CodeBlock />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.BulletList />
            <RichTextEditor.OrderedList />
          </RichTextEditor.ControlsGroup>

          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Link />
            <RichTextEditor.Unlink />
          </RichTextEditor.ControlsGroup>

          {/* 簡易 LaTeX 插入按鈕 */}
          <RichTextEditor.ControlsGroup>
            <RichTextEditor.Control
              onClick={() => editor?.commands.insertContent('$a^2 + b^2 = c^2$')}
              title="插入 inline LaTeX"
            >
              𝑓(x)
            </RichTextEditor.Control>
            <RichTextEditor.Control
              onClick={() => editor?.commands.insertContent('\n$$\nE = mc^2\n$$\n')}
              title="插入 block LaTeX"
            >
              ∫dx
            </RichTextEditor.Control>
          </RichTextEditor.ControlsGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content style={{ minHeight: height }} />
      </RichTextEditor>
    </div>
  );
}
