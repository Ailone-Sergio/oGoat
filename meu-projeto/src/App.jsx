import SquishSwitch from './components/SquishSwitch/SquishSwitch';

const [airplane, setAirplane] = useState(false);

function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>
<SquishSwitch
  checked={airplane}
  onChange={setAirplane}
  label="Airplane mode"
  trackColor="#27272a"
  trackOnColor="#f5f5f5"
  width={76}
  height={38}
  radius={19}
  speed={50}
  stretch={36}
  hoverScale={1.035}
  colorDuration={320}
  disabled={false}
  thumbColor="#4e4e51"
  thumbOnColor="#27272a"
/>
</div>
)
}
export default App