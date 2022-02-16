export default function Text({ addEmoji }) {
    const text = 'I am Javascript Lover';
    return <div>{addEmoji ? addEmoji(text, '$') : text}</div>;
}
