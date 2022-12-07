import React, { ReactNode } from 'react';

export type JsonEditorProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function JsonEditor({ children }: JsonEditorProps) {
  return (
    <div>
      {children}
    </div>
  );
}
