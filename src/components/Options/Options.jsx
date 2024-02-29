import clsx from 'clsx';
import css from './Options.module.css';

const Options = ({addFeedback, resetFeedback, isHidden}) => {

    return (
      <div className={css.options}>
        <button onClick={() => addFeedback('good')}className={css.btnOption}>Good</button>
        <button onClick={() => addFeedback('neutral')} className={css.btnOption}>Neutral</button>
        <button onClick={() => addFeedback('bad')} className={css.btnOption}>Bad</button>
        <button onClick={() => resetFeedback()} className={clsx(css.btnOption, {[css.btnHidden]: isHidden,})}>Reset</button>
      </div>
    )
  };

export default Options;  