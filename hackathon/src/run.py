import os
import subprocess
# get dir of this file
dir_path = os.path.dirname(os.path.realpath(__file__))
# change dir to frontend


def main():
    os.chdir(dir_path + '/frontend')

    # execute reflex run in command line in a subprocess
    subprocess.run(['reflex', 'run'])
    pass

if __name__ == '__main__':
    main()