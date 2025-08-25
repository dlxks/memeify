import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  return (
    <header className="header">
      <Icon className="logo" icon="streamline-ultimate:funny-mask" width="24" height="24" />
      <h1>Memeify</h1>
    </header>
  )
}