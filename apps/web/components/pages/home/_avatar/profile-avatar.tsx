import { Avatar } from "@packages/ui-w/shared/avatar/avatar"
import { AvatarFallback } from "@packages/ui-w/shared/avatar/avatar-fallback"
import { AvatarImage } from "@packages/ui-w/shared/avatar/avatar-image"

export function ProfileAvatar() {
  return (
    <Avatar className="size-5 rounded-none">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/239557641?v=4"
        alt="Francis Ignacio"
      />
      <AvatarFallback className="rounded-none text-[8px]">FI</AvatarFallback>
    </Avatar>
  )
}
