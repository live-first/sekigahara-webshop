import { ArtistType } from '@/domain/artist.ts'
import { Modal } from '@/components/Modal/index.tsx'
import { ArtistModal } from '@/templates/artistModal/artistModal.tsx'
import { ArtistBox } from './artistBox'

export const ArtistBoxModal = (props: ArtistType) => {
  return (
    <Modal button={<ArtistBox {...props} />}>
      <ArtistModal {...props} />
    </Modal>
  )
}
