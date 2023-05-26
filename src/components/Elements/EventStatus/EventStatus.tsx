type Status = "upcoming" | "active" | "finished"
function toJapanese(status : Status) {
  switch (status) {
    case "upcoming":
      return "開催前";
    case "active":
      return "募集中";
    case "finished":
      return "終了済";
  }
}

type Props = {
  status : Status,
}

export default function EventStatus({status}:Props) {
    return (
      <p>hello, { toJapanese(status) }</p>
    )
}