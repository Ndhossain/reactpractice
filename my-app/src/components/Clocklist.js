import Clock from './Clock';

export default function Clocklist(quantity = []) {
    return (
        <div>
            {quantity.quantity.map((key) => (
                <Clock key={key} />
            ))}
        </div>
    );
}
