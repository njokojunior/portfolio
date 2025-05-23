import styles from './ProfileContact.module.css'


const icons = [
  { icon: "person-circle-outline", text: "Junior Njoko" },
  { icon: "mail-outline", text: "sopbweaudrey@gmail.com" },
  { icon: "location-outline", text: "Douala, Cameroon" },
  { icon: "briefcase-outline", text: "5+ Years of Experience" },
];

function ProfileContact() {
    return (
      
        icons.map((icon) => (
          <div className={styles.iconBox}>
            <ion-icon name={icon.icon}></ion-icon>
            <div>{icon.text}</div>
          </div>
        ))
      
    );
}

export default ProfileContact;