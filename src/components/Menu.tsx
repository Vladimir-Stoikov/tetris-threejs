export const Menu = ({ onStart }: { onStart: () => void }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 100,
      }}
    >
      <h1 style={{ color: 'white', fontSize: '3rem' }}>Tetris</h1>
      <button
        onClick={onStart}
        style={{
          padding: '15px 30px',
          fontSize: '1.5rem',
          background: 'linear-gradient(to right, #ff5e62, #ff9966)',
          border: 'none',
          borderRadius: '10px',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Start Game
      </button>
    </div>
  );
};
