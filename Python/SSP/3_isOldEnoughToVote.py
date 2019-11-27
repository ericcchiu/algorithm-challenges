# Write a function called “isOldEnoughToVote”.
# Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
# Notes:
# The legal voting age in the United States is 18.

def is_old_enough_to_vote(age):
  if age >= 18:
    return True
  elif age < 18: 
    return False

print(is_old_enough_to_vote(18))
print(is_old_enough_to_vote(17))