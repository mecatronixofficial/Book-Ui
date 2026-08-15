const heights = [22, 14, 20, 12, 18, 22, 16, 20, 13, 19, 15, 21, 12, 18, 22, 14];
const tones = ["#4A3428", "#C8894A", "#5C4033", "#B87333", "#4A3428", "#5C4033"];

/**
 * A thin row of book "spines" of varying height and tone — a quiet nod to
 * a shelf, used to separate sections instead of a plain horizontal rule.
 */
export default function SpineDivider() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <div className="spine-divider">
        {heights.map((h, i) => (
          <span
            key={i}
            style={{
              height: `${h}px`,
              backgroundColor: tones[i % tones.length],
              opacity: 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
