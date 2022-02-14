export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius > 10) {
        return <p>The water would boil</p>;
    }
    return <p>The water can&apos;t boil</p>;
}
