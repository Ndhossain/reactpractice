export default function HoverCounter({ count, handleChange }) {
    return (
        <div>
            <h1 onMouseOver={handleChange}>Hovered {count} times</h1>
        </div>
    );
}
