export interface Message {
  content: string;
  className: string;
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isMessage(obj: any): obj is Message {
  return 'content' in obj 
  && 'className' in obj 
  && 'type' in obj
}

export default Message