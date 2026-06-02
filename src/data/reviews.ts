export interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  tripType?: string;
}

// Curated from authentic Google reviews
export const reviews: Review[] = [
  { name: "Festus Mutinda", rating: 5, date: "a year ago", text: "I loved the experience. The staff there are really dedicated, and the rooms are affordable.", tripType: "Local Guide" },
  { name: "Ivy Mbaro", rating: 5, date: "a year ago", text: "The place was amazing and the staff are very welcoming, friendly and very easy to approach." },
  { name: "Nickson Mbaro", rating: 5, date: "a year ago", text: "Great location, the staff were friendly and the services were great! Enjoyed my stay!" },
  { name: "Victor Esinyen", rating: 5, date: "a year ago", text: "Best services. Affordable and in a good location. Whenever I come to Mombasa for job or trainings, this is my go-to Lodge." },
  { name: "THUKU MBARO", rating: 5, date: "a year ago", text: "Great customer service. Affordable rooms for business travellers and backpackers. Great WiFi!" },
  { name: "Nashon Adero", rating: 5, date: "a year ago", text: "Excellent place to stay while in Mombasa.", tripType: "Local Guide" },
  { name: "Pius Kiamba", rating: 5, date: "10 months ago", text: "Very hospitable and warm reception." },
  { name: "Dácil R Márquez", rating: 5, date: "5 years ago", text: "Bed was comfortable, the room was clean and the staff was polite. Good price and filling breakfast.", tripType: "Local Guide" },
  { name: "Peter Kinuthia Waitathu", rating: 5, date: "6 years ago", text: "Rooms include bed and breakfast. Clean rooms with well maintained AC.", tripType: "Local Guide" },
  { name: "Kevin Ndegwa", rating: 5, date: "3 years ago", text: "Hospitality at its best — home away from home.", tripType: "Local Guide" },
  { name: "David Thuku", rating: 5, date: "a year ago", text: "Affordable accommodation, clean and convenient.", tripType: "Local Guide" },
  { name: "Sikukuu Chemoiywo", rating: 4, date: "3 years ago", text: "Neat & good reception area. Comparatively quiet with a restaurant serving all meals on order. A nice family & official function accommodation destination.", tripType: "Local Guide" },
  { name: "ANDREW SYANGABO", rating: 4, date: "6 years ago", text: "Pocket friendly holiday destination offering bed and breakfast with free WiFi covering most of the rooms.", tripType: "Local Guide" },
  { name: "Moses Mwangi", rating: 4, date: "6 years ago", text: "A nice, clean and affordable place to spend the night.", tripType: "Local Guide" },
  { name: "Maina Morgan", rating: 5, date: "6 years ago", text: "Buxton Leisure Lodge is a place to spend the night for upcoming entrepreneurs — quite affordable.", tripType: "Local Guide" },
  { name: "SIMON MBUTHIA", rating: 4, date: "3 weeks ago", text: "The place is wonderful. Services are top notch with very friendly attendants." },
  { name: "Maureen Gathua", rating: 5, date: "a month ago", text: "Lovely vacation stay — comfortable rooms and warm welcome.", tripType: "Local Guide" },
  { name: "Frank GP", rating: 5, date: "9 months ago", text: "Great stay during my vacation — friendly staff and clean rooms.", tripType: "Local Guide" },
];
