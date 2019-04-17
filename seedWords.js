let shuffle = require('./shuffle');

const seedWords = `
throat
representative
egg
compare
perpetual
black-and-white
calculator
peep
flagrant
turn
meal
straw
knot
coach
train
scarce
plane
diligent
detailed
repulsive
plant
grin
tenuous
incredible
hate
press
bait
beautiful
outgoing
ball
arrogant
concentrate
pinch
bed
silent
produce
kaput
uncovered
hope
tree
tearful
crayon
late
desk
sheep
grandmother
foamy
sedate
zinc
bake
known
eggs
true
meek
picture
drawer
rush
annoy
gentle
intelligent
pretend
motionless
talk
raise
men
supply
flower
nappy
relieved
gaping
room
chin
strap
stain
voyage
grateful
need
detect
burst
exuberant
handle
tow
grey
interest
undesirable
voiceless
axiomatic
imminent
flavor
example
tame
toe
miniature
support
spill
satisfying
hungry
bounce
crate
past
blushing
murky
notice
tasteful
machine
erect
fact
present
irritate
profuse
box
jumpy
point
cumbersome
scold
calendar
ratty
lock
gorgeous
woebegone
kick
employ
quarrelsome
awake
little
comfortable
time
rebel
airport
malicious
rake
stranger
torpid
bomb
girl
humor
suggestion
pumped
fuzzy
meat
scarf
expert
exchange
imported
polite
ground
numberless
defiant
questionable
sassy
care
gruesome
cool
aromatic
puzzling
fruit
annoyed
ticket
romantic
bucket
wiggly
bee
transport
wipe
activity
week
yummy
pencil
laugh
connect
low
need
badge
wilderness
enjoy
fearless
able
hissing
spy
system
dock
half
wary
wild
touch
summer
versed
rightful
bulb
pastoral
obey
juvenile
shoes
kindhearted
time
quirky
laborer
coil
shoe
baby
cap
smoggy
rustic
entertaining
pancake
hateful
anxious
bear
victorious
sack
best
possible
rings
teeny-tiny
animal
few
island
blush
horrible
efficient
vast
goofy
kick
ship
ladybug
plain
cherry
trains
fearful
female
frail
general
funny
stop
oranges
raspy
pig
dispensable
bells
cooperative
swanky
tasteless
polish
adorable
macho
wide-eyed
back
light
petite
fail
snore
eye
boring
believe
committee
coat
snow
absorbing
tangy
filthy
knit
wistful
deliver
lake
mighty
voracious
abrupt
subtract
please
tart
yellow
icky
ill-fated
crow
joke
tendency
ashamed
company
truthful
inquisitive
childlike
unequal
mere
wreck
airplane
useful
permissible
holistic
coast
allow
amused
edge
guarded
utter
value
superficial
utopian
pricey
abortive
pedal`;



const seedWordArray = seedWords
  .split("\n")
  .map((word) => word.trim())
  .sort(() => 0.5 - Math.random())
  .slice(0, 10);

module.exports = seedWordArray;
