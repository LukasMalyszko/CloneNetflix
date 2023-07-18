import { Tooltip } from "react-tooltip";

export const ReactionButtons = ({
  index,
  handleTooltip,
  onMouseOut,
}: {
  index: number;
  handleTooltip: (id: string) => void;
  onMouseOut: () => void;
}) => {
  return (
    <div className="hover-dropdown__reaction-buttons" onMouseLeave={onMouseOut}>
      <div
        className="hover-dropdown__icon-container dislike"
        onMouseEnter={() => handleTooltip(`tooltip-${index}`)}
        onMouseLeave={() => handleTooltip("")}
        data-tooltip-id={`tooltip-${index}`}
        data-tooltip-content="To nie dla mnie"
      >
        <img src="/like.svg" alt="dislike" />
      </div>

      <div
        className="hover-dropdown__icon-container like"
        onMouseEnter={() => handleTooltip(`tooltip-${index}`)}
        onMouseLeave={() => handleTooltip("")}
        data-tooltip-id={`tooltip-${index}`}
        data-tooltip-content="Podoba mi się"
      >
        <img src="/like.svg" alt="like" />
      </div>
      <div
        className="hover-dropdown__icon-container love"
        onMouseEnter={() => handleTooltip(`tooltip-${index}`)}
        onMouseLeave={() => handleTooltip("")}
        data-tooltip-id={`tooltip-${index}`}
        data-tooltip-content="Uwielbiam to"
      >
        <img src="/love.svg" alt="love" />
      </div>
      <Tooltip id={`tooltip-${index}`} className="tooltip tooltip--custom" />
    </div>
  );
};
