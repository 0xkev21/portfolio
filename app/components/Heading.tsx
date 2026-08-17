function Heading({ level, children }: {level: number, children: any}) {
  const Tag = `h${level}`;
  return (
    <Tag>{children}</Tag>
  )
}

export default Heading