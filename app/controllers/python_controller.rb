class PythonController < ApplicationController
  def zork

    @code = %Q{floor1 = ["a sword", "nothing", "stairs down", "nothing", "nothing"]
floor2 = ["nothing", "a ruby ring", "stairs up", "stairs down", "nothing"]
floor3 = ["nothing", "dragon", "nothing", "stairs up", "nothing"]

user_floor = floor1
user_position = 1
user_inventory = []

alive = True
has_won = False
monster_attacking = False
player_moved = False
user_input = ""

print("On your search for the villainous dragon, you have finally made your way into her underground dungeon lair.")
print("A dank stench rests heavy in the air. Through the ancient brick beneath your feet, you feel a slow and steady rumble.")

while user_input != "quit" and alive and not has_won:
    room_feature = user_floor[user_position]

    if player_moved:
        player_moved = False
        if room_feature == "stairs down":
            monster_attacking = True
            print("As you enter the room, you turn just in time to see an ogre lunging toward you.")
            print("You deftly dodge his blow.")
        elif room_feature == "dragon":
            monster_attacking = True
            print("Stepping into the room is like walking into a furnace.")
            print("There in front of you, stands the fiercest dragon you have ever laid eyes on.")
        else:
            print("You enter the room and see " + room_feature)

    else:
        print("What do you do?")
        user_input = input("What do you do? ")

        if user_input == "right":
            if(user_position < 4 and not monster_attacking):
                user_position = user_position + 1
                player_moved = True
            else:
                print("You can't go right.")

        elif user_input == "left":
            if user_position > 0 and not monster_attacking:
                user_position = user_position - 1
                player_moved = True
            else:
                print("You can't go left.")

        elif user_input == "down":
            if room_feature == "stairs down" and not monster_attacking:
                if user_floor == floor1:
                    user_floor = floor2
                elif user_floor == floor2:
                    user_floor = floor3
                player_moved = True
            else:
                print("You can't go down.")

        elif user_input == "grab":
            if room_feature == "a sword" or room_feature == "a ruby ring":
                print("You pick up " + room_feature)
                user_inventory.append(room_feature)
                user_floor[user_position] = "nothing"
            else:
                print("There is nothing to grab!")

        elif user_input == "fight":
            if monster_attacking:
                if room_feature == "dragon":
                    if "a sword" in user_inventory:
                        if "a ruby ring" in user_inventory:
                            print("Your ruby ring glows brightly and protects you from the dragon's flames.")
                            #time.sleep(1)
                            print("You step forward quickly and thrust your sword directly into the dragon's heart!")
                            has_won = True
                        else:
                            print("You draw your sword and begin to advance toward the dragon.")
                            #time.sleep(1)
                            print("But before you reach the beast, she breathes deeply and unleashes a fury of flames that engulf your body.")
                            alive = False
                    else:
                        print("You swing your fists wildly. If only you had a weapon to defend yourself!")
                        print("The dragon bends forward and devours you in a single bite.")
                        alive = False
                else:
                    if "a sword" in user_inventory:
                        print("You advance quickly and slay the beast with your sword.")
                    else:
                        print("If only you had a weapon to defend yourself! The orc swings his club and this time you are not quick enough to escape his wrath.")
                        alive = False

                monster_attacking = False

            else:
                print("There is nothing here to fight!")

        elif user_input == "help":
            print("Commands are: right, left, up, down, fight, run, grab, and commands")

        elif user_input == "quit":
            print("If you say so!")

        else:
            print("I don't know that command! For a list of commands type 'help'. Type 'quit' to quit.")

if has_won:
    #time.sleep(1)
    print("Congratulations! You have slayed the dragon and won the game!")
    #time.sleep(1)
else:
    #time.sleep(1)
    print("You have died :(")
    #time.sleep(1)

print("THE END")

    }
    render layout: 'python'
  end
end
