<?php

	class Transaction{

		private $array = array();

		public function __construct(){
		}

		public function transaction(){
			 for ($i = 0;$i <= 10; $i++) {
                $array[] = array(
                    'hash'	=> 'Tx#'.GetRandString(),
                    'from'	=> 'Tx#'.GetRandString(),
                    'to'	=> 'Tx#'.GetRandString(),
                    'age'		=> date('d.m.Y'),
                    'value'	=> rand(1, 100),
                    'fee' => rand(1, 10000),
                    'status' => rand(0,1)
                );
            }
			return $array;
		}


	}

?>
