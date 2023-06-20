import classes from "@/styles/EventStatus.module.css"

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
const EventStatus = ({status}:Props) => {
  switch (status) {
    case "upcoming":
      return upcoming();
    case "active":
      return active();
    case "finished":
      return finished();
  }
}
export default EventStatus;

const upcoming = ():JSX.Element => {
  return (
    <div className={classes.eventStatus}>
      <span className={ classes.upcomingCircle }></span><p>{ toJapanese("upcoming") }</p>
    </div>
  );
}

const active = ():JSX.Element => {
  return (
    <div className={classes.eventStatus}>
      <span className={ classes.activeCircle }></span><p>{ toJapanese("active") }</p>
    </div>
  );
}

const finished = ():JSX.Element => {
  return (
    <div className={classes.eventStatus}>
      <span className={ classes.finishedCircle }></span><p>{ toJapanese("finished") }</p>
    </div>
  );
}